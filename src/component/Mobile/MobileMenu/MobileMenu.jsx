import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { DrawerStyled } from "./MobileMenu.styled";
import { Flex, Row, Space } from "antd";
import { CgClose } from "react-icons/cg";
import { MoreButtonData, NavbarData } from "../../Header/Header.data";
import * as Styled from './MobileMenu.styled';
import { Link } from "react-router-dom";
import { theme } from "../../../themes";
import Icon from '@ant-design/icons';

const ArrowDown = () => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4.27548 5.25138C3.92126 5.59384 3.90707 6.15904 4.24199 6.51922L7.34184 9.85287L7.34264 9.85374C7.34916 9.86083 7.35582 9.86784 7.36261 9.87476C7.63746 10.1551 8.05299 10.2177 8.39111 10.0525C8.48115 10.0085 8.56465 9.94893 8.63732 9.87483C8.64428 9.86773 8.65121 9.86042 8.6576 9.85348L8.65845 9.85256L10.2082 8.18589L11.758 6.51922C12.0929 6.15904 12.0787 5.59384 11.7245 5.25138C11.364 4.90286 10.7908 4.91905 10.45 5.28554L8 7.92035L5.54998 5.28554C5.2092 4.91905 4.63598 4.90286 4.27548 5.25138Z" fill={theme.colors.textPaper}></path>
    </svg>
);

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    }

    const onClose = () => {
        setOpen(false);
    }

    const handleCloseMenu = () => {
        setOpen(false);
    }

    const openDropdown = () => {
        setIsDropdown(true);
    }

    const closeDropdown = () => {
        setIsDropdown(false);
    }

    return (
        <>
            <AiOutlineMenu
                onClick={showDrawer}
                size={24}
                cursor='pointer'
            />
            <DrawerStyled
                placement="left"
                size="large"
                closable={false}
                onClose={onClose}
                open={open}
            >
                <Flex vertical gap={40}>
                    <Row justify="end">
                        <CgClose
                            size={24}
                            onClick={handleCloseMenu}
                            style={{ color: theme.colors.textLore }}
                        />
                    </Row>

                    <Styled.NavBarContainer>
                        <Flex vertical gap={40}>
                            {NavbarData.map((nav) => (
                                <Link to={nav.to} key={nav.key}>
                                    {nav.label}
                                </Link>
                            ))}

                            <Flex vertical>
                                <Space onClick={isDropdown ? closeDropdown : openDropdown}>
                                    MORE 
                                    <Icon 
                                        component={ArrowDown}
                                        style={{
                                            transform: isDropdown ? 'rotate(180deg)' : ''
                                        }}
                                    />
                                </Space>

                                {isDropdown && MoreButtonData.map((data) => (
                                    <Link 
                                        key={data.key} 
                                        to={data.to}
                                        style={{
                                            marginTop: '24px',
                                            paddingLeft: '24px'
                                        }}
                                    >
                                        {data.label}
                                    </Link>
                                ))}
                            </Flex>
                        </Flex>
                    </Styled.NavBarContainer>

                    <Row>
                        <Styled.ButtonStyled>
                            Play for free
                        </Styled.ButtonStyled>
                    </Row>
                </Flex>
            </DrawerStyled>
        </>
    )
}

export default MobileMenu;