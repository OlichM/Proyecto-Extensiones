import { css } from "lit";

export default css`
    button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        cursor: pointer;
        padding: 0.75rem 1rem;
        border-radius: 999px;
        font-size: 0.875rem;
        transition: all 0.2s ease;
    }
    .light {
        background-color: white;
        color: black;
    }
    .dark{
        background-color: #2f3655;
        color: white;
    }
    .light.secondary {
        background-color: white;
        color: #091235;
        border: 1px solid #cbd5e1;
    }

    .light.primary {
        background-color: #f25c54;
        color: white;
        border: none;
    }
    .dark.secondary {
        background-color: #2f3655;
        color: white;
        border: 1px solid #4b5563;
    }
    .dark.primary {
        background-color: #f25c54;
        color: white;
        border: none;
    }
    .primary {
        background: #f25c54;
        color: white;
        border-radius: 999px;
    }
    .secondary {
        background: #2f3655;
        color: white;
        border-radius: 999px;
    }
    .secondary:hover {
        background-color: #3a4263;
    }
    .remove {
        background: transparent;
        color: white;
        border: 1px solid #4a526e;
        border-radius: 999px;
        padding: 0.5rem 1rem;
        font-size: 0.875rem;
    }
    .remove:hover {
        background-color: #f25c54;
        border-color: #f25c54;
    }
    .light.remove {
        color: #333;
        border-color: #cfd5e2;
    }
    .dark.remove {
        color: white;
        border-color: #4a526e;
    }
`;
