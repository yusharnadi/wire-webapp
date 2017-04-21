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
window.z.calling.mapper = z.calling.mapper || {};

z.calling.mapper.ECallMessageMapper = (function() {

  const _build_e_call_message = function(type, response, session_id, additional_payload) {
    const e_call_message_et = new z.calling.entities.ECallMessage(type, response, session_id);
    e_call_message_et.add_properties(additional_payload);
    return e_call_message_et;
  };

  const _build_cancel = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.CANCEL, response, session_id, additional_payload);
  };

  const _build_group_check = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.GROUP_CHECK, response, session_id, additional_payload);
  };

  const _build_group_leave = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.GROUP_LEAVE, response, session_id, additional_payload);
  };

  const _build_group_setup = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.GROUP_SETUP, response, session_id, additional_payload);
  };

  const _build_group_start = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.GROUP_START, response, session_id, additional_payload);
  };

  const _build_hangup = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.HANGUP, response, session_id, additional_payload);
  };

  const _build_prop_sync = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.PROP_SYNC, response, session_id, additional_payload);
  };

  const _build_reject = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.REJECT, response, session_id, additional_payload);
  };

  const _build_setup = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.SETUP, response, session_id, additional_payload);
  };

  const _build_update = (response, session_id, additional_payload) => {
    _build_e_call_message(z.calling.enum.E_CALL_MESSAGE_TYPE.UPDATE, response, session_id, additional_payload);
  };

  /**
   * Map incoming e-call message into entity.
   *
   * @private
   * @param {Object} event - E-call event object
   * @returns {z.calling.entities.ECallMessage} E-call message entity
   */
  const _map_event = function(event) {
    const {content: e_call_message} = event;

    const additional_properties = {
      client_id: event.sender,
      conversation_id: event.conversation,
      time: event.time,
      user_id: event.from,
    };

    let content = undefined;
    switch (e_call_message.type) {
      case z.calling.enum.E_CALL_MESSAGE_TYPE.GROUP_SETUP:
        content = {
          dest_client_id: e_call_message.dest_clientid,
          dest_user_id: e_call_message.dest_userid,
          props: e_call_message.props,
          sdp: e_call_message.sdp,
        };
        break;
      case z.calling.enum.E_CALL_MESSAGE_TYPE.PROP_SYNC:
        content = {
          props: e_call_message.props,
        };
        break;
      case z.calling.enum.E_CALL_MESSAGE_TYPE.SETUP: case z.calling.enum.E_CALL_MESSAGE_TYPE.UPDATE:
        content = {
          props: e_call_message.props,
          sdp: e_call_message.sdp,
        };
        break;
      default:
        break;
    }

    if (content) {
      $.extend(additional_properties, content);
    }

    const e_call_message_et = new z.calling.entities.ECallMessage(e_call_message.type, e_call_message.resp, e_call_message.sessid);
    e_call_message_et.add_properties(additional_properties);
    return e_call_message_et;
  };

  return {
    build_cancel: _build_cancel,
    build_group_check: _build_group_check,
    build_group_leave: _build_group_leave,
    build_group_setup: _build_group_setup,
    build_group_start: _build_group_start,
    build_hangup: _build_hangup,
    build_prop_sync: _build_prop_sync,
    build_reject: _build_reject,
    build_setup: _build_setup,
    build_update: _build_update,
    map_event: _map_event,
  };
})();
