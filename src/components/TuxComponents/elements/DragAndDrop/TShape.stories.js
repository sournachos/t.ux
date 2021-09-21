import React, {useState} from 'react'
import { withDesign } from "storybook-addon-designs";
import Draggable, {DraggableCore} from 'react-draggable';
import DropArrow from '../../../../images/DragNDrop/DropArrow.svg'
import { DnDActivity, DnDTitle, DnDBoxOne, DnDBoxTwo, DnDItemBox, DnDImg, DnDPlaceholdText, DnDItemBoxTitle } from "./TShape"

export default {
  title: "Drag&Drop",
  decorators: [withDesign],
};

export const TShapeDragnDrop = () => {


  const DnDItems = [
    'Logo on top left',
    'Cancel Button',
    'Back link',
    'Square Check Box'
  ]




  return (
    <DnDActivity>

    <DnDTitle>Match the term below with it's appropriate column</DnDTitle>

    <Draggable>
      <DnDItemBox/>
    </Draggable>

    <DnDBoxOne>
      <DnDItemBoxTitle>User Control & Freedom</DnDItemBoxTitle>
      <DnDImg src={DropArrow}/>
      <DnDPlaceholdText/>
    </DnDBoxOne>

    <DnDBoxTwo>
      <DnDItemBoxTitle>Consistency & Standards</DnDItemBoxTitle>
      <DnDImg src={DropArrow}/>
      <DnDPlaceholdText/>
    </DnDBoxTwo>

    </DnDActivity>
  )
};
