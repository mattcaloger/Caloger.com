import CSharpIcon from '../../img/lang-icons/csharp.svg';
import CssIcon from '../../img/lang-icons/css.svg';
import HtmlIcon from '../../img/lang-icons/html5.svg';
import JavaIcon from '../../img/lang-icons/java.svg';
import JavaScriptIcon from '../../img/lang-icons/javascript.svg';
import NodeIcon from '../../img/lang-icons/nodejs.svg';
import PhpIcon from '../../img/lang-icons/php.png';
import ReactIcon from '../../img/lang-icons/react.svg';
import SpringIcon from '../../img/lang-icons/spring.svg';
import SqlIcon from '../../img/lang-icons/sql.svg';
import TypeScriptIcon from '../../img/lang-icons/typescript.svg';
import { ColorCSharp, ColorHtml, ColorJs, ColorCss, ColorPhp, ColorReactJs, ColorNode, ColorTypescript, ColorJava, ColorSpring, ColorSql } from './Languages';

import styled from 'styled-components';
import React from 'react';

import IconImage from '../Layout/IconImage';


const IconBlock = styled.div`
    display:flex;
    flex-direction: column;
    font-weight: bold;

    &>*{
        margin: 5px;
    }

`

const CSharpIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={CSharpIcon} />
            <ColorCSharp>CSharp</ColorCSharp>
        </IconBlock>
    )
}

const JavaScriptIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={JavaScriptIcon} />
            <ColorJs>JavaScript</ColorJs>
        </IconBlock>
    )
}

const HtmlIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={HtmlIcon} />
            <ColorHtml>HTML</ColorHtml>
        </IconBlock>
    )
}

const CssIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={CssIcon} />
            <ColorCss>CSS</ColorCss>
        </IconBlock>
    )
}

const PhpIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={PhpIcon} />
            <ColorPhp>PHP</ColorPhp>
        </IconBlock>
    )
}

const ReactIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={ReactIcon} />
            <ColorReactJs>React</ColorReactJs>
        </IconBlock>
    )
}

const NodeIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={NodeIcon} />
            <ColorNode>Node</ColorNode>
        </IconBlock>
    )
}

const TypeScriptIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={TypeScriptIcon} />
            <ColorTypescript>TypeScript</ColorTypescript>
        </IconBlock>
    )
}

const JavaIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={JavaIcon} />
            <ColorJava>Java</ColorJava>
        </IconBlock>
    )
}

const SpringIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={SpringIcon} />
            <ColorSpring>Spring</ColorSpring>
        </IconBlock>
    )
}

const SqlIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={SqlIcon} />
            <ColorSql>SQL</ColorSql>
        </IconBlock>
    )
}

export { CSharpIcon, CSharpIconBlock, JavaScriptIconBlock, HtmlIconBlock, CssIconBlock, PhpIconBlock, ReactIconBlock, NodeIconBlock, TypeScriptIconBlock, JavaIconBlock, SpringIconBlock, SqlIconBlock }