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
import DotnetIcon from '../../img/lang-icons/dotnet.svg'
import GitIcon from '../../img/lang-icons/git.svg';
import IntelliJIcon from '../../img/lang-icons/IntelliJIDEA.svg';
import VisualStudioIcon from '../../img/lang-icons/visualstudio.svg';
import VisualStudioCodeIcon from '../../img/lang-icons/vscode.svg';
import AngularIcon from '../../img/lang-icons/angular.svg';
import FigmaIcon from '../../img/lang-icons/Figma.svg';

import { ColorCSharp, ColorHtml, ColorJs, ColorCss, ColorPhp, ColorReactJs, ColorNode, ColorTypescript, ColorJava, ColorSpring, ColorSql, ColorDotnet, ColorGit, ColorIntellij, ColorVisualStudio, ColorVisualStudioCode, ColorAngular, ColorFigma } from './Languages';

import styled from 'styled-components';
import React from 'react';

import IconImage from '../Layout/IconImage';
import { SHADOWS } from '../Layout/Shadows';
import { BORDER_RADIUS } from '../Layout/BorderRadius';

const DROP_SHADOW = SHADOWS.medium;
const DROP_SHADOW_HOVER = SHADOWS.large;

const BORDER = BORDER_RADIUS;

const IconBlock = styled.div`
    display:flex;
    flex-direction: column;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    background: white;
    width: 8vw;
    height: 8vw;
    border-radius: ${BORDER};
    text-align: center;
    padding: 10px;


    transition: all ease-in .1s;

    &>*{
        margin: 5px;
    }

    &:hover {
        ${DROP_SHADOW_HOVER};
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

const AspDotNotCoreIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={DotnetIcon} />
            <ColorDotnet>ASP.NET</ColorDotnet>
        </IconBlock>
    )
}

const GitIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={GitIcon} />
            <ColorGit>Git</ColorGit>
        </IconBlock>
    )
}

const IntelliJIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={IntelliJIcon} />
            <ColorIntellij>IntelliJ</ColorIntellij>
        </IconBlock>
    )
}

const VisualStudioIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={VisualStudioIcon} />
            <ColorVisualStudio>Visual Studio</ColorVisualStudio>
        </IconBlock>
    )
}

const VisualStudioCodeIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={VisualStudioCodeIcon} />
            <ColorVisualStudioCode>VS Code</ColorVisualStudioCode>
        </IconBlock>
    )
}

const AngularIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={AngularIcon} />
            <ColorAngular>Angular</ColorAngular>
        </IconBlock>
    )
}

const FigmaIconBlock = () => {
    return (
        <IconBlock>
            <IconImage src={FigmaIcon} />
            <ColorFigma>Figma</ColorFigma>
        </IconBlock>
    )
}

export { CSharpIcon, CSharpIconBlock, JavaScriptIconBlock, HtmlIconBlock, CssIconBlock, PhpIconBlock, ReactIconBlock, NodeIconBlock, TypeScriptIconBlock, JavaIconBlock, SpringIconBlock, SqlIconBlock, AspDotNotCoreIconBlock as DotnetIconBlock, GitIconBlock, IntelliJIconBlock, VisualStudioCodeIconBlock, VisualStudioIconBlock, AngularIconBlock, FigmaIconBlock };