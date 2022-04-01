import React, { useEffect } from 'react'
import PageTitle from '../../Layout/PageTitle'
import PageContainer from '../../Layout/PageContainer'
import BSEImg from '../../../img/blog-img/bse/BSEScreenshot.png'
import BSEFlow from '../../../img/blog-img/bse/bseflow.png'
import BlogImage from '../../Layout/BlogImage'
import CaptionedImage from '../../Layout/CaptionedImage'
import PageSubtitle from '../../Layout/PageSubtitle'

import Prism from 'prismjs'
import "prismjs/themes/prism-tomorrow.css";

import styled from 'styled-components'

const springCode = `
    @Controller
    public class ApplicationController {
        
        /**
         * @return frontend
         */
        @RequestMapping(value = "/")
        public String index() {
            return "index.html";
        }


        /**
         * @return forward to handle React router
         */
        @GetMapping(value = "/**/{path:[^\\\\.]*}")
        public String forward() {
            return "forward:/";
        }
    }

`.trim()

const CodeContainer = styled.pre`
    text-align: left;

    & .token-line {
        line-height: 1.3em;
        height: 1.3em;
    }
`

export default function BuildsheetEditorBlog() {
    useEffect(() => {
        setTimeout(() => Prism.highlightAll(), 0)
      }, []);
    return (
        <PageContainer>
            <PageTitle>Serving a React App with Spring Framework</PageTitle>
            <div>
        
                <PageSubtitle>The Problem</PageSubtitle>
                <p>
                    Serving a 
                </p>

                <pre className="line-numbers">
                    <code className="language-java">{springCode}</code>
                </pre>
                
            </div>
        </PageContainer>
    )
}
