import React from 'react';
import classNames from 'classnames';
import Header, { HeaderLeft } from '../../layout/Header/Header';
import useDarkMode from '../../hooks/useDarkMode';
import OuterHeaderRight from './OuterHeaderRight';

const MainHeader = (props) => {
    const { darkModeStatus } = useDarkMode();
    return (
        <Header>
            <HeaderLeft>
                <div className='d-flex align-items-center'>
                    <div className='row g-4'>
                        <div className='col-md-auto'>
                            <div
                                className={classNames('fs-4', 'fw-normal', {
                                    'text-dark': !darkModeStatus,
                                })}>
                                {props.title}
                            </div>
                        </div>
                    </div>
                </div>
            </HeaderLeft>
            {props.shown === true && <OuterHeaderRight />}
        </Header>
    );
};

export default MainHeader;
