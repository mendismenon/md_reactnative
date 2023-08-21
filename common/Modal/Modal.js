import React from "react";
import RNModal from "react-native-modal";
import { StyleSheet, View, Text, Button } from "react-native";
import ModalStyles from "./ModalStyles";

const Modal = ({isVisible = false,
    children,
    ...props}) => {

        return (
            <>
                <RNModal
                    isVisible={isVisible}
                    animationInTiming={1000}
                    animationOutTiming={1000}
                    backdropTransitionInTiming={800}
                    backdropTransitionOutTiming={800}
                    {...props}
                >
                    {children}
                </RNModal>
            </>
        );
};

const ModalContainer = ({ children }) => (
    <View style={ModalStyles.container}>{children}</View>
  );

  const ModalHeader = ({ title }) => (
    <View style={ModalStyles.header}>
      <Text style={ModalStyles.text}>{title}</Text>
    </View>
  );

  const ModalBody = ({ children }) => (
    <View style={ModalStyles.body}>{children}</View>
  );
  
  const ModalFooter = ({ children }) => (
    <View style={ModalStyles.footer}>{children}</View>
  );

Modal.Header = ModalHeader;
Modal.Container = ModalContainer;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
export default Modal;
