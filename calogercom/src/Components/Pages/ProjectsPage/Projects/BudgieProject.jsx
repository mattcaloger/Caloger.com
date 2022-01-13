import React from 'react'
import SplitContainer from './Layout/SplitContainer'
import SplitContainerPanel from './Layout/SplitContainerPanel'
import AboutBlurb from '../../../AboutBlurb/AboutBlurb'

export default function BudgieProject() {
    return (
        <div>
            <h1>Budgie</h1>
            <SplitContainer>
                
                <SplitContainerPanel>
                    <img width="100" height="100" src="https://previews.123rf.com/images/lkeskinen/lkeskinen1802/lkeskinen180208322/95731150-example-stamp-typographic-label-stamp-or-icon.jpg"/>
                </SplitContainerPanel>
                <SplitContainerPanel>
                    <AboutBlurb></AboutBlurb>
                </SplitContainerPanel>
            </SplitContainer>
        </div>
    )
}
