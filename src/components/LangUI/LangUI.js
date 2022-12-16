import React from "react";
import Dropdown, {
    DropdownMenu,
    DropdownToggle,
} from '../bootstrap/Dropdown';
import Button from "../bootstrap/Button";
import classNames from "classnames";
import Icon from '../icon/Icon';

const LangUI = (props) => {
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

    return (
        <>
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
        </>
    )
}

export default LangUI