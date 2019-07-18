// Copyright (C) 2016 Dinglebit Developers
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

$(document).ready(function() {
    $('#logo .dinglebit-logo-dingleberry').on('click tap', clicked);
});

function clicked() {
    $('#logo .dinglebit-logo-dingleberry').hide();
    $('#modal-thanks').modal('toggle');
    colorize();
}

function colorize() {
    var pants = $('#logo .dinglebit-logo-pants');

    // Pick a random color every 750ms.
    var ci = setInterval(function() {
	pants.css('fill', '#'+Math.floor(Math.random()*0xFFFFFF).toString(16));
    }, 750);

    // After 30s, stop randomizing the color and put the dingleberry back up.
    setTimeout(function() {
	clearInterval(ci);
	$('#logo .dinglebit-logo-dingleberry').show();
    }, 30 * 1000);
}
