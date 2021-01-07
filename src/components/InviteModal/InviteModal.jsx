import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import EmailCheckbox from '../../components/EmailCheckbox/EmailCheckbox';
import groupAPI from '../../services/groupService';
import * as mailAPI from '../../services/mail-api'

const InviteModal = ({
  show,
  handleClose,
  groups,
  setGroups,
  selectedGroupIndex,
  setSelectedGroupIndex,
}) => {
  // const [invited, setInvited] = useState([]);
  const [newGroups, setNewGroups] = useState('');

  const handleSendInvite = async () => {
    const groupToInvite =groupAPI.update(groups[selectedGroupIndex])
    // TODO: send group info to nodemailer api
    mailAPI.create(groupToInvite)
  };

  const handleCopyLink = () => {
    //
  };

  const handleAddInvited = (index) => {
    console.log('adding', index);
    // get the selected group
    const group = groups[selectedGroupIndex];
    const inviteList = group.invited;
    // find the user in the invite list
    const user = inviteList[index];
    user.invited = true;
    // make a copy of groups in state
    const newGroups = groups;
    newGroups[selectedGroupIndex] = group;
    // set new groups to state
    console.log(newGroups);
    // setNewGroups(newGroups);
    setGroups(newGroups);
  };

  const handleRemoveInvited = (index) => {
    console.log('removing', index);
    // get the selected group
    const group = groups[selectedGroupIndex];
    const inviteList = group.invited;
    // find the user in the invite list
    const user = inviteList[index];
    user.invited = false;
    // make a copy of groups in state
    const newGroups = groups;
    newGroups[selectedGroupIndex] = group;
    // set new groups to state
    setNewGroups(newGroups);
    // setGroups(newGroups);
  };

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Body>
          <h1>Invite Students</h1>
          <h2>Group:</h2>

          <select
            value={selectedGroupIndex}
            onChange={(e) => setSelectedGroupIndex(e.target.value)}
          >
            <option value=""></option>
            {groups &&
              groups.length >= 0 &&
              groups.map((group, index) => (
                <option key={index} value={index}>
                  {group.name}
                </option>
              ))}
          </select>
          {groups &&
            groups.length >= 0 &&
            selectedGroupIndex &&
            groups[selectedGroupIndex].invited.map((user, index) => (
              <EmailCheckbox
                key={index}
                user={user}
                index={index}
                handleAddInvited={handleAddInvited}
                handleRemoveInvited={handleRemoveInvited}
              />
            ))}
          <Button onClick={handleSendInvite}>Send Invite</Button>
          <Button onClick={handleCopyLink}>Copy Link</Button>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default InviteModal;
