import { css } from "lit";
export default css`
    :host {
        display: block;
    }
    .card {
        width: 100%;
        padding: 1.25rem;
        border-radius: 1.25rem;
        box-sizing: border-box;
        background-color: #e9a463;
    }

    .top{
        display:flex;
        gap:1rem;
    }

    .footer{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top: 1.5rem;
    }
`;
