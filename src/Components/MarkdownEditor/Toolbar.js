import React from "react";
import Button from "react-bootstrap/Button";
import "@github/markdown-toolbar-element";
import { FaHeading,FaBold,FaItalic,FaQuoteRight,FaCode,FaLink,FaFileImage,FaListUl,FaListOl,FaDownload } from "react-icons/fa";

function Toolbar(props) {
  const btnStyle = {
    padding: "4px 10px",
    fontSize: "12px",
    lineHeight: "23px",
    margin: "2px",
    
  };

  return (
    <div>
      <markdown-toolbar for="textarea_input">
        <md-header level="1">
          <Button style={btnStyle} variant="Dark">
            <FaHeading/>
          </Button>
        </md-header>

        <md-bold>
          <Button style={btnStyle} variant="Dark">
            <FaBold/>
          </Button>
        </md-bold>

        <md-italic>
          <Button style={btnStyle} variant="Dark">
            <FaItalic/>
          </Button>
        </md-italic>

        <md-quote>
          <Button style={btnStyle} variant="Dark">
            <FaQuoteRight/>
          </Button>
        </md-quote>

        <md-code>
          <Button style={btnStyle} variant="Dark">
            <FaCode/>
          </Button>
        </md-code>

        <md-link>
          <Button style={btnStyle} variant="Dark">
            <FaLink/>
          </Button>
        </md-link>

        <md-image>
          <Button style={btnStyle} variant="Dark">
            <FaFileImage/>
          </Button>
        </md-image>

        <md-unordered-list>
          <Button style={btnStyle} variant="Dark">
            <FaListUl/>
          </Button>
        </md-unordered-list>

        <md-ordered-list>
          <Button style={btnStyle} variant="Dark">
            <FaListOl/>
          </Button>
        </md-ordered-list>

        <Button style={btnStyle} variant="Dark" onClick={props.clickHandler}>
          <FaDownload/>
        </Button>
      </markdown-toolbar>
    </div>
  );
}

export default Toolbar;
