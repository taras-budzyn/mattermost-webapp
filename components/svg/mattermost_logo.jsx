// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

import React from 'react';
import {FormattedMessage} from 'react-intl';

export default class MattermostLogo extends React.PureComponent {
    render() {
        return (
            <span {...this.props}>
                <img width="36" height="36" src="images/main_small_icon.png">
            </span>
        );
    }
}

const style = {
    background: {
        enableBackground: 'new 0 0 500 500',
    },
    st0: {
        fillRule: 'evenodd',
        clipRule: 'evenodd',
    },
};
