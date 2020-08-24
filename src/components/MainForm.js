import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px 0;

  input {
    display: block;
    margin: 3px 0;
  }

  span {
    display: block;
    padding-bottom: 3px;
  }
`;

function MainForm() {
  return (
    <Form>
      <label>
        <span>Title:</span>
        <input type="text" name="title" />
      </label>
      <label>
        <span>Description:</span>
        <input type="text" name="description" />
      </label>
      <input type="button" value="Add whiskie" />
    </Form>
  );
}

export default MainForm;
