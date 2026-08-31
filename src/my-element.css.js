import { css } from "lit";

export default css`
  :host {
    display: block;
    min-height: 100vh;
    background: #040d2e;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 1rem;
  }
  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
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

.theme {
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
`;
