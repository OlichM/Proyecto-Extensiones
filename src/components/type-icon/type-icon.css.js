import { css } from "lit";

export default css`
    :host {
        display: block;
    }
    .icon {
        width: 48px;
        height: 48px;
    }
    .logo-icon {
        width: 120px;
        height: auto;
        object-fit: contain;
    }
    .logo-light {
        color: white;
    }
    .logo-dark {
        color: #091540;
    }
    .theme-icon {
        width: 20px;
        height: 20px;
        display: block;
    }
`;
