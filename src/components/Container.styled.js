import styled from "styled-components";

const size = {
    mobile:'425px',
    laptop: '1024px',
    desktop: '2560px'
  }

  export const device = {
    mobile: `(min-width: ${size.mobile})`,
    laptop: `(min-width: ${size.laptop})`,
    desktop: `(min-width: ${size.desktop})`,
  };



export const RemoveButton = styled.button`

`