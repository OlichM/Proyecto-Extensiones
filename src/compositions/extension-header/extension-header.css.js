import { css } from "lit";

export default css`
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1.5rem;
        border-radius: 1rem;
        margin-bottom: 2rem;
    }
    .logo-container {
        display: flex;
        align-items: center;
    }
    .light {
    background-color: #eaebec;
    }
    .dark {
    background-color: #1f2538;
    }
`;
