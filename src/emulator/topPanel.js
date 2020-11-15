import React from "react";
import { Button, ButtonGroup, Intent } from "@blueprintjs/core";

const TopPanel = () => {
  return (
    <div className="emulator-top-panel">
      <ButtonGroup>
        <Button icon="step-backward" />
        <Button icon="play" intent={Intent.SUCCESS} />
        <Button icon="step-forward" />
        <Button icon="help" />
      </ButtonGroup>
    </div>
  );
};

export default TopPanel;
