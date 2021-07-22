import styled from 'styled-components';

export const Space = styled.div`
    margin-bottom: 100px;
`;

export const Table = styled.table`
    width: 1080px;
    display: block:
    position: absolute;
    thead{
        background: #96A4A6;
        border-radius: 40px;
        color: #282c34;
        font-size: 20px;
    }

    td{
        min-width: 100px;
        margin-left: 40px;
        margin-right: 40px;
        font-size: 20px;
    }

    .special{
        border-width: medium;
        border-color: white;
    }
`;