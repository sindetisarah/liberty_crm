import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import { ThemeProvider } from 'react-jss';
import { useFullscreen } from 'react-use';
import { Route, Switch, useLocation } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { TourProvider } from '@reactour/tour';
import ThemeContext from '../../contexts/themeContext';
import 'react-whatsapp-widget/dist/index.css';
import Aside from '../../layout/Aside/Aside';
import Wrapper from '../../layout/Wrapper/Wrapper';
import Portal from '../../layout/Portal/Portal';
import useDarkMode from '../../hooks/useDarkMode';
import COLORS from '../../helpers/enumColors';
import { Toast } from '../../components/bootstrap/Toasts';
import { ToastContainer } from '../../components/bootstrap/Toasts';
import { getOS } from '../../helpers/helpers';
import steps, { styles } from '../../steps';

function Dashboard() {
    getOS();
    const location = useLocation();
    const { themeStatus, darkModeStatus } = useDarkMode();
    const theme = {
        theme: themeStatus,
        primary: COLORS.PRIMARY.code,
        secondary: COLORS.SECONDARY.code,
        success: COLORS.SUCCESS.code,
        info: COLORS.INFO.code,
        warning: COLORS.WARNING.code,
        danger: COLORS.DANGER.code,
        dark: COLORS.DARK.code,
        light: COLORS.LIGHT.code,
    };

    useEffect(() => {
        if (darkModeStatus) {
            document.documentElement.setAttribute('theme', 'light');
        }
        return () => {
            document.documentElement.removeAttribute('theme');
        };
    }, [darkModeStatus]);

    const { fullScreenStatus, setFullScreenStatus } = useContext(ThemeContext);
    const ref = useRef(null);
    useFullscreen(ref, fullScreenStatus, {
        onClose: () => setFullScreenStatus(false),
    });

    useLayoutEffect(() => {
        if (process.env.REACT_APP_MODERN_DESGIN === 'false') {
            document.body.classList.add('modern-design');
        } else {
            document.body.classList.remove('modern-design');
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <ToastProvider components={{ ToastContainer, Toast }}>
                <TourProvider
                    steps={steps}
                    styles={styles}
                    showNavigation={false}
                    showBadge={false}>
                    <div
                        ref={ref}
                        className='app'
                        style={{
                            backgroundColor: fullScreenStatus && 'var(--bs-body-bg)',
                            zIndex: fullScreenStatus && 1,
                            overflow: fullScreenStatus && 'scroll',
                        }}>
                        <Switch location={location}>
                            <Route>
                                <Aside />
                                <Wrapper />
                            </Route>
                        </Switch>
                    </div>
                    <Portal id='portal-notification'>
                        {/* <ReactNotification /> */}
                    </Portal>
                </TourProvider>
            </ToastProvider>
            {/* <WhatsAppWidget phoneNumber='0700327002' companyName='Sunculture' /> */}
        </ThemeProvider>
    );
}

export default Dashboard;
