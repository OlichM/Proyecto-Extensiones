import { css } from "lit";

export default css`
  :host {
    display: block;
    min-height: 100vh;
  }
  .theme {
    background-color: #040d2e;
    min-height: 100vh;
  }  
  .light {
    background: #f5f5f5;
    color: #000;
  }
  .dark {
    background: #091235;
    color: #fff;
  }
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
    box-sizing: border-box;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    font-weight: 700;
  }
  .filter {
    display: flex;
    gap: 0.75rem; 
  }
  .extension-grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr;
    padding-bottom: 6rem;
  }
  @media (min-width: 1200px) {
    .extension-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    .header-content {
      flex-direction: column;
      align-items: center;
      gap: 1rem;
    }
    .filter {
      width: 100%;
      justify-content: flex-start;
      flex-wrap: wrap;
    }
  }
`;
