import { css } from "lit";
export default css`
    :host {
        display: block;
    }
    .card {
        display: flex;
        flex-direction: column;
        border: 1px solid #394160;
        border-radius: 1.25rem;
        box-sizing: border-box;
        background-color: #1f2538;
        height: 100%;
        padding: 1.25rem;
    }
    .top{
        display:flex;
        gap:1rem;
        align-items: flex-start;
    }
    .content {
        flex: 1;
    }
    .footer{
        display:flex;
        justify-content:space-between;
        align-items:center;
        margin-top: 1.5rem;
    }
    .content h3 {
        margin: 0;
        font-size: 1.25rem;
        font-weight: 700;
    }
    .content p {
        margin-top: 0.5rem;
        color: #b8b8c7;
        line-height: 1.4;
    }
    .dark .content h3 {
        color: white;
    }
    .dark .content p {
        color: #b6bfd3;
    }
    .light .content h3 {
        color: black;
    }
    .light .content p {
        color: #555;
    }
    .dark {
        background: #1f2538;
        color: white;
    }
    .light {
        background: white;
        color: black;
    } 
`;
