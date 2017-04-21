/*
 * Wire
 * Copyright (C) 2017 Wire Swiss GmbH
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 *
 */

'use strict';

window.z = window.z || {};
window.z.calling = z.calling || {};
window.z.calling.enum = z.calling.enum || {};

z.calling.enum.CallStateGroups = {
  CAN_CONNECT: [
    z.calling.enum.CallState.INCOMING,
    z.calling.enum.CallState.ONGOING,
    z.calling.enum.CallState.REJECTED,
  ],
  IS_ACTIVE: [
    z.calling.enum.CallState.CONNECTING,
    z.calling.enum.CallState.INCOMING,
    z.calling.enum.CallState.ONGOING,
    z.calling.enum.CallState.OUTGOING,
  ],
  IS_ENDED: [
    z.calling.enum.CallState.ENDED,
    z.calling.enum.CallState.UNKNOWN,
  ],
  IS_RINGING: [
    z.calling.enum.CallState.INCOMING,
    z.calling.enum.CallState.OUTGOING,
  ],
  STOP_RINGING: [
    z.calling.enum.CallState.CONNECTING,
    z.calling.enum.CallState.DISCONNECTING,
    z.calling.enum.CallState.ENDED,
    z.calling.enum.CallState.ONGOING,
    z.calling.enum.CallState.REJECTED,
  ],
  WAS_MISSED: [
    z.calling.enum.CallState.CONNECTING,
    z.calling.enum.CallState.INCOMING,
    z.calling.enum.CallState.REJECTED,
    z.calling.enum.CallState.OUTGOING,
  ],
};
