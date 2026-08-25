import { css } from "lit";

export default css`
  :host {
    display: block;
    max-width: 1200px;
    margin: 0 auto;
    padding: 1rem;
  }

  .filter {
    display: flex;
    gap: 0.75rem; 
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }
  
  .extension-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
  }

  @media (min-width: 768px) {
    .extension-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1200px) {
    .extension-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
