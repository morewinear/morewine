import styled from 'styled-components'

export const ContactSectionContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 450px;
  height: 100%;
  min-height: 350px;
  max-height: 450px;
  padding: 8px;

  &[data-pending=true] {
    & > div[data-status-container] {
      display: flex;
    }
  }
`

export const Title = styled.p`
  width: 100%;
  height: 1em;
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  font-size: calc(1.75 * 0.813em);
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  margin: 0;
`

export const ContactForm = styled.form`
  width: 100%;
  height: calc(100% - 1em - 8px);
  display: flex;
  flex-direction: column;
  padding-top: 1.5em;
`

export const BlockContainer = styled.div`
  height: 3.5em;
  margin-bottom: 1.5em;
`

export const Label = styled.label`
  width: 100%;
  height: 2em;
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-size: calc(0.9 * 0.813em) !important;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.08em;
  margin: 0;
`

export const Input = styled.input`
  width: 100%;
  height: 2.5em;
  font-size: calc(0.9 * 0.813em) !important;
  font-weight: 500;
  line-height: 1;
  margin: 0;
`

export const TextareaContainer = styled.div`
  width: 100%;
  height: calc(100% - 3 * 3.5em - 5 * 1.5em - 2em);
  margin-bottom: 1.5em;
  font-size: calc(0.9 * 0.813em) !important;
  font-weight: 500;
  line-height: 1;

  & > label {
    font-size: calc(1.3 * 0.813em) !important;
    line-height: 1.3;
  }
`

export const Textarea = styled.textarea`
  width: 100%;
  height: calc(100% - 2em);
  resize: none;
`

export const Button = styled.button`
  width: 70%;
  height: 3.5em;
  margin-left: auto;
  margin-right: auto;
`

export const StatusContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #222;

  &[data-status="200"] {
    & > *[data-check] {
      display: block;
    }
  }

  &:not([data-status="200"]) {
    & > *[data-spinner] {
      display: block;
    }
  }

  & > svg {
    display: none;
    width: 64px !important;
    height: 64px !important;
    margin-bottom: 1em;

    &[data-check] {
      color: green;
    }

    &[data-spinner] {
      color: white;
      opacity: 0.6;
    }
  }
`

export const StatusText = styled.p`
  display: none;
  width: 100%;
  height: 2em;
  color: white;
  opacity: 0.6;
  text-transform: uppercase;
  font-size: calc(0.9 * 0.813em) !important;
  font-weight: 700;
  line-height: 2;
  letter-spacing: 0.08em;
  text-align: center;
`