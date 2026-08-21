import { css } from "lit";

export default css`
:host {
    --text-footer-align: left;
}

* {
    margin: 0;  
    padding: 0;
    text-align: var(--text-footer-align);
    display: block;
}   

size-xs {
    font-size: 0.75rem;
}

size-s {
    font-size: 1rem;
}
size-m {
    font-size: 1.85rem;
}

.weight-bold { 
    font-weight: 500;
}
.variant-alt {
    color: white;
}
`;
