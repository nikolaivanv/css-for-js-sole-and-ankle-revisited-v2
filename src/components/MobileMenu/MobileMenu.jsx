import React from "react";
import styled from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";
import { WEIGHTS } from "../../constants";

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onDismiss}>
      <Dialog.Portal>
        <Overlay />
        <Content>
          <CloseButton onClick={onDismiss}>
            <Icon id="close" />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
          <VisuallyHidden>
            <Dialog.Title>Mobile navigation</Dialog.Title>
            <Dialog.Description>Mobile navigation</Dialog.Description>
          </VisuallyHidden>
          <Filler />
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <a href="/terms">Terms and Conditions</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/contact">Contact Us</a>
          </Footer>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: var(--color-backdrop);
`;

const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  width: 300px;
  height: 100%;
  padding: 24px 32px;
  display: flex;
  flex-direction: column;
`;

const CloseButton = styled(UnstyledButton)`
  position: absolute;
  top: 10px;
  right: 0;
  padding: 16px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const NavLink = styled.a`
  color: var(--color-gray-900);
  font-weight: ${WEIGHTS.medium};
  text-decoration: none;
  font-size: 1.125rem;
  text-transform: uppercase;

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const Filler = styled.div`
  flex: 1;
`;

const Footer = styled.footer`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 14px;
  justify-content: flex-end;
`;

export default MobileMenu;
