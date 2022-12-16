import React from 'react';
import PropTypes from 'prop-types';
import OffCanvas, { OffCanvasBody } from '../../components/bootstrap/OffCanvas';
import Dropdown, {
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
} from '../../components/bootstrap/Dropdown';
import Button from '../../components/bootstrap/Button';

const RightPane = ({ setOpen, isOpen, PostForm, title }) => {
    return (
        <OffCanvas setOpen={setOpen} isOpen={!isOpen} isRightPanel>
            <OffCanvasBody className='p-4'>
                <div className='row mb-3 d-flex justify-content-between align-items-center'>
                    <div className='col'>
                        <div className='d-flex align-items-center'>
                            <div className='h5 mb-0 text-muted'>
                                <strong
                                    style={{
                                        marginLeft: '9px',
                                    }}>
                                    {title}
                                </strong>
                            </div>
                        </div>
                    </div>
                    <div className='col-auto'>
                        <Dropdown>
                            <DropdownToggle hasIcon={false}>
                                <Button
                                    className="close-raise-button"
                                    color='danger'
                                    icon='Close'
                                    size='md'
                                    onClick={() => {
                                        setOpen(true);
                                    }}>
                                    Close
                                </Button>
                            </DropdownToggle>
                            <DropdownMenu isAlignmentEnd>
                                <DropdownItem>
                                    <Button
                                        className="close-raise-button"
                                        color='danger'
                                        icon='Close'
                                        size='md'
                                        onClick={() => {
                                            setOpen(true);
                                        }}>
                                        Close
                                    </Button>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
                <hr />
                <div isCompact>
                    <PostForm />
                </div>
            </OffCanvasBody>
        </OffCanvas>
    );
};
RightPane.propTypes = {
    setOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default RightPane;
