import React, { useEffect } from 'react'
import PageTitle from '../../Layout/PageTitle'
import PageContainer from '../../Layout/PageContainer'
import BSEImg from '../../../img/blog-img/bse/BSEScreenshot.png'
import BSEFlow from '../../../img/blog-img/bse/bseflow.png'
import BlogImage from '../../Layout/BlogImage'
import CaptionedImage from '../../Layout/CaptionedImage'
import PageSubtitle from '../../Layout/PageSubtitle'

import Prism from 'prismjs'
import 'prismjs/components/prism-java';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import styled from 'styled-components'


const springCode = `
// ApplicationController.java

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

const appPropertiesCode = `
// application.properties
spring.mvc.pathmatch.matching-strategy=ant_path_matcher
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
                <PageSubtitle>Summary</PageSubtitle>
                <p>
                    To serve a React app using Spring, follow these steps:
                    
                </p>

                <ol>
                    <li>Compile and copy your React build output</li>
                    <li>Add a Spring controller to handle serving the app and sub-routes</li>
                    <li>Add a line to application.properties to allow ant-style matching</li>
                </ol>
        
                <PageSubtitle>Compiling Your React App</PageSubtitle>
                <p>
                    Run the <code>npm run build</code> command to compile your React app for production. Copy all files located under <code>/build</code> React folder to your Spring project under <code>/src/main/resources/public</code>.
                </p>

                <PageSubtitle>Add Your Spring Controller</PageSubtitle>
                <p>
                    You can serve a React App with routing using the below snippet:
                </p>

                <pre className="line-numbers">
                    <code className="language-java">{springCode}</code>
                </pre>

                <p>
                    This ensures that navigating to <code>https://website.com/</code> or <code>https://website.com/route</code> returns the compiled front-end, and ensures that any sub-routes are also forwarded properly.
                </p>

                <PageSubtitle>Add to your Applications.Properties Config</PageSubtitle>

                <p>
                    To be able to match the sub-routes, we need to enable ant path matching:
                </p>

                <pre className="line-numbers">
                    <code className="language-java">{appPropertiesCode}</code>
                </pre>

                <PageSubtitle>Conclusion</PageSubtitle>

                <p>
                    As you can see, adding a React production build to your Spring project is as simple as adding a class and changing a configuration. A next step to improve the developer experience would be to automatically copy over the build files to your Spring project.
                </p>
                
            </div>
        </PageContainer>
    )
}
