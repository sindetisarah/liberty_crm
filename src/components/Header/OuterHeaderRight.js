import React, { useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import Button from '../../components/bootstrap/Button';
import { HeaderRight } from '../../layout/Header/Header';
import Dropdown, {
    DropdownMenu,
    DropdownToggle,
} from '../bootstrap/Dropdown';
import Icon from '../icon/Icon';

// eslint-disable-next-line react/prop-types
const OuterHeaderRight = ({ beforeChildren, afterChildren }) => {
    const styledBtn = {
        color: 'success',
        hoverShadow: 'default',
        size: 'lg',
    };
    const defaultdBtn = {
        color: 'light',
        hoverShadow: 'default',
        size: 'lg'
    };

    const { i18n } = useTranslation();

    useLayoutEffect(() => {
        document.documentElement.setAttribute('lang', i18n.language);
    });

    return (
        <HeaderRight>
            <div className='row g-3'>
                {beforeChildren}
                <div className='col-auto' style={{ display: 'flex' }}>
                    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                    <Button {...defaultdBtn} icon='Search' iconColor='white' aria-label='MySearch' style={{ marginRight: "15px" }} />
                    <Dropdown>
                        <DropdownToggle hasIcon={false}>
                            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                            <Button {...styledBtn} icon='Person' iconColor='blue' aria-label='My Account' />
                        </DropdownToggle>
                        <DropdownMenu isAlignmentEnd size='lg' className='py-0 overflow-hidden'>
                            <div className='row g-0'>
                                <div
                                    className={classNames(
                                        'col-12',
                                        'p-4',
                                        'd-flex justify-content-center',
                                        'fw-bold fs-5',
                                        'text-info',
                                        'border-bottom border-info',
                                        'bg-l25-success'
                                    )}>
                                    My Account
                                </div>

                                <div className='col-12 p-4 transition-base cursor-pointer bg-warning'>
                                    <div className='d-flex flex-column align-items-center justify-content-center'>
                                        <Icon icon='Logout' size='3x' onClick={e => {
                                            if (window.confirm('Are you sure you want to logout?')) {
                                                localStorage.clear()
                                                window.location.reload()
                                            }
                                        }} color='danger' />
                                        <span style={{ color: "black" }}>Logout</span>
                                    </div>
                                </div>
                            </div>
                        </DropdownMenu>
                    </Dropdown>
                </div>
                {afterChildren}
            </div>
        </HeaderRight>
    );
};
OuterHeaderRight.propTypes = {
    beforeChildren: PropTypes.node,
    afterChildren: PropTypes.node,
};
OuterHeaderRight.defaultProps = {
    beforeChildren: null,
    afterChildren: null,
};

export default OuterHeaderRight;