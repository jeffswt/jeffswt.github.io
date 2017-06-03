
// msbot.js: Minesweeper Bot as a Javascript module
// Copyright (C) 2017  jeffswt.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

if (document.domain !== 'minesweeper.io')
    throw alert('Please run this script in "minesweeper.io".');
if (msbot_loaded)
    throw alert('"msbot.js" should only be loaded once.');
var msbot_loaded = true;
alert('Congratulations!\n You\'ve made minesweeper great again.');
console.clear();

var Queue2D = function() {
    this.length = 0;
    this.arr_x = [];
    this.arr_y = [];
    this.includes = function(x, y) {
        for (var i = 0; i < this.length; i++)
            if (x == this.arr_x[i] && y == this.arr_y[i])
                return true;
        return false;
    }
    this.push = function(x, y) {
        if (this.includes(x, y))
            return ;
        this.arr_x.push(x);
        this.arr_y.push(y);
        this.length += 1;
        return ;
    };
    this.pop = function(x, y) {
        if (this.length <= 0)
            return [undefined, undefined];
        var a = this.arr_x,
            b = this.arr_y;
        var c = a.splice(1),
            d = b.splice(1);
        this.arr_x = c;
        this.arr_y = d;
        this.length -= 1;
        return [a[0], b[0]];
    };
    this.empty = function() {
        return this.length <= 0;
    };
    return this;
};


var msbot = {
    entry : appController.minesweeper,
    cell : {
        // 0: bomb, 10: covered;
        // 1~8: numbers, 9: empty space;
        get : function(x, y) {
            var ret = parseInt(msbot.entry.playGrid.get(x, y));
            if (isNaN(ret))
                return 11;
            return ret;
        },
        eval_mine : function(x, y) {
            var ret = parseInt(msbot.entry.mineGrid.get(x, y));
            if (isNaN(ret))
                return false;
            return ret == 0;
        },
        random : function() {
            var x = parseInt(Math.random() * 62 + 2),
                y = parseInt(Math.random() * 62 + 2);
            return [x, y];
        },
        is : {
            mine : function(x, y) {
                return msbot.cell.get(x, y) == 0;
            },
            number : function(x, y) {
                var tmp = msbot.cell.get(x, y);
                return tmp >= 1 && tmp <= 8;
            },
            empty : function(x, y) {
                return msbot.cell.get(x, y) == 9;
            },
            covered : function(x, y) {
                return msbot.cell.get(x, y) == 10;
            },
            flag : function(x, y) {
                return msbot.cell.get(x, y) > 11;
            }
        },
        flag : function(x, y) {
            return msbot.entry.placeFlag(x, y);
        },
        reveal : function(x, y) {
            return msbot.entry.revealCell(x, y);
        },
        adjacent : {
            move_x : [ 1, 1, 0, -1, -1, -1, 0, 1 ],
            move_y : [ 0, -1, -1, -1, 0, 1, 1, 1 ],
            check_counter : function(x, y, func) {
                var res = 0;
                for (var i = 0; i < 8; i++) {
                    var nx = x + msbot.cell.adjacent.move_x[i],
                        ny = y + msbot.cell.adjacent.move_y[i];
                    if (func(nx, ny))
                        res += 1;
                }
                return res;
            },
            mines : function(x, y) {
                return msbot.cell.adjacent.check_counter(x, y, msbot.cell.is.mine);
            },
            flags : function(x, y) {
                return msbot.cell.adjacent.check_counter(x, y, msbot.cell.is.flag);
            },
            covered : function(x, y) {
                return msbot.cell.adjacent.check_counter(x, y, msbot.cell.is.covered);
            }
        }
    },
    ai : {
        check_cell : function(x, y) {
            var val_est = msbot.cell.get(x, y);
            if (!(val_est >= 1 && val_est <= 8)) // avoid undef and etc
                return false;
            var val_mne = msbot.cell.adjacent.mines(x, y),
                val_flg = msbot.cell.adjacent.flags(x, y),
                val_uns = msbot.cell.adjacent.covered(x, y);
            if (val_est == val_mne + val_flg + val_uns&& val_uns > 0) {
                // All the covered ones can be flagged
                for (var i = 0; i < 8; i++) {
                    var nx = x + msbot.cell.adjacent.move_x[i],
                        ny = y + msbot.cell.adjacent.move_y[i];
                    if (msbot.cell.is.covered(nx, ny)) {
                        msbot.interface.io.flag(nx, ny);
                        msbot.cell.flag(nx, ny);
                        return true;
                    }
                }
            } if (val_est == val_mne + val_flg && val_uns > 0) {
                // All the rest can be revealed
                for (var i = 0; i < 8; i++) {
                    var nx = x + msbot.cell.adjacent.move_x[i],
                        ny = y + msbot.cell.adjacent.move_y[i];
                    if (msbot.cell.is.covered(nx, ny)) {
                        msbot.interface.io.reveal(nx, ny);
                        msbot.cell.reveal(nx, ny);
                        return true;
                    }
                }
            }
            // Nothing to do.
            return false;
        },
        scan_fail_count : 0,
        scan_map_flag : function(x, y) {
            // <del>Selecting random cells to check</del>
            // Seems that randomizing is not a good idea.
            // Then we are flooding the map with random cells
            // var l_beg = (Math.random() > 0.5) ? 31 : 1,
            //     u_beg = (Math.random() > 0.5) ? 31 : 1;
            var l_to_r = Math.random() > 0.5,
                u_to_d = Math.random() > 0.5;
            for (var i = (l_to_r ? 2 : 62); l_to_r ? (i <= 62) : (i >= 62); l_to_r ? i++ : i--)
                for (var j = (u_to_d ? 2 : 62); u_to_d ? (j <= 62) : (j >= 62); u_to_d ? j++ : j--)
                    if (msbot.ai.check_cell(i, j)) {
                        msbot.ai.scan_fail_count = 0;
                        return true;
                    }
            // Randomly scan and flag
            msbot.ai.scan_fail_count += 1;
            // If it does not reach an extent, skip this procedure
            if (msbot.ai.scan_fail_count < 30)
                return true;
            if (!msbot.ai.scan_random_flag())
                return false;
            // Done working
            msbot.ai.scan_fail_count = 0;
            return true;
        },
        scan_random_flag : function() {
            var val = 0, nx = 0, ny = 0;
            var fail_cnt = 0;
            while (val != 10 && fail_cnt <= 256) {
                [nx, ny] = msbot.cell.random();
                val = msbot.cell.get(nx, ny);
                fail_cnt += 1;
            }
            if (fail_cnt > 256)
                return false;
            msbot.interface.io.flag(nx, ny);
            msbot.cell.flag(nx, ny);
            return true;
        }
    },
    interface : {
        powered_on : false,
        delay : 250,
        io : {
            flag : function(x, y) {
                console.log('Flagged cell (' + x + ', ' + y + ').');
                return ;
            },
            reveal : function(x, y) {
                console.log('Revealed cell (' + x + ', ' + y + ').');
                return ;
            }
        },
        resume_game : function() {
            $('#btnStart').click();
            return ;
        },
        thread : function() {
            if (!msbot.interface.powered_on)
                return ;
            if (!msbot.ai.scan_map_flag())
                msbot.interface.power_off();
            setTimeout(msbot.interface.thread, msbot.interface.delay);
            return ;
        },
        power_on : function() {
            if (msbot.interface.powered_on)
                return ;
            msbot.entry = appController.minesweeper;
            msbot.interface.powered_on = true;
            console.log('msbot.js: Powered on.');
            msbot.interface.thread();
            return ;
        },
        power_off : function() {
            if (!msbot.interface.powered_on)
                return ;
            msbot.interface.powered_on = false;
            console.log('msbot.js: Powered off.');
            return ;
        },
        toggle : function() {
            if (msbot.interface.powered_on)
                msbot.interface.power_off();
            else
                msbot.interface.power_on();
            return ;
        },
        reboot : function() {
            setTimeout(function() {
                msbot.interface.power_off();
                setTimeout(function() {
                    msbot.interface.power_on();
                    return ;
                }, 200);
            }, 1000);
            return ;
        }
    },
    inject : function() {
        appController.game.state.onResumedCallback = function() {
            msbot.interface.reboot();
            return ;
        };
        appController.game.state.onPausedCallback = function() {
            msbot.interface.power_off();
            return ;
        };
        eval(('MinesweeperUI=' + MinesweeperUI)
            .replace('console.log("onGamePause")', 'msbot.interface.power_off()')
            .replace('console.log("onGameResume")', 'msbot.interface.reboot()')
        );
        // Now adding keyboard actions
        var old_keydown = window.onkeydown;
        window.onkeydown = function(a) {
            if (a.keyCode == 220) { // backslash
                msbot.interface.toggle();
                return ;
            }
            return old_keydown(a);
        };
        return ;
    }
};

msbot.inject();
msbot.interface.reboot();
