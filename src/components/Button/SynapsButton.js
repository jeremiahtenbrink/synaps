import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {Button} from 'antd';

/**
 * Button Component
 *
 * @component
 *
 * @example
 * return (
 *    <SynapsButton  />
 *    )
 */
export const SynapsButton = ({
  text,
  height,
  width,
  borderRadius,
  type = 'primary',
  size = 'default',
  icon,
  shape,
  loading,
  block,
  color,
  appView,
  allFieldsValidated,
  fontWeight,
  fontSize,
  ...props
}) => {
  return (
    <StyledAntdButton
      color={color}
      type={type}
      size={size}
      icon={icon}
      shape={shape}
      loading={loading && 'loading'}
      block={block && 'block'}
      height={height}
      width={width}
      borderRadius={borderRadius}
      allFieldsValidated={allFieldsValidated}
      appView={appView}
      fontWeight={fontWeight}
      fontSize={fontSize}
      {...props}
    >
      {text}
    </StyledAntdButton>
  );
};

SynapsButton.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'primaryCreateCard',
    'defaultCreateCard',
    'default',
    'dashed',
    'danger',
    'link',
    'darkgray',
  ]),
  size: PropTypes.oneOf(['large', 'default', 'small']),
  icon: PropTypes.string,
  shape: PropTypes.oneOf(['circle', 'round']),
  loading: PropTypes.bool,
  block: PropTypes.bool,
  background: PropTypes.string,
};

const StyledAntdButton = styled(Button)`
  && {
    border: ${props => {
      if (props.border) {
        return props.border;
      } else if (
        props.type === 'defaultCreateCard' &&
        props.appView === 'APP_VIEW_MOBILE'
      ) {
        return '3px solid #4CB69F';
      } else if (
        props.type === 'defaultCreateCard' &&
        props.appView === 'APP_VIEW_DESKTOP'
      ) {
        return '1px solid #343D58';
      }
    }};
    font-weight: ${props => (props.fontWeight ? props.fontWeight : '')};
    font-size: ${props => {
      if (props.fontSize) {
        return props.fontSize;
      } else if (
        props.type === 'primaryCreateCard' ||
        props.type === 'defaultCreateCard'
      ) {
        if (props.appView === 'APP_VIEW_DESKTOP') {
          return '21px';
        }
      }
    }};
    height: ${props => {
      if (props.height) {
        return props.height;
      } else if (
        props.type === 'primaryCreateCard' ||
        props.type === 'defaultCreateCard'
      ) {
        if (props.appView === 'APP_VIEW_MOBILE') {
          return '42px';
        } else {
          return '54px';
        }
      }
    }};

    width: ${props => {
      if (props.width) {
        return props.width;
      } else if (
        props.type === 'primaryCreateCard' ||
        props.type === 'defaultCreateCard'
      ) {
        if (props.appView === 'APP_VIEW_MOBILE') {
          return '136px';
        } else {
          return '264px';
        }
      }
    }};

    border-radius: ${props => {
      if (props.borderRadius) {
        return props.borderRadius;
      } else if (
        props.type === 'primaryCreateCard' ||
        props.type === 'defaultCreateCard'
      ) {
        if (props.appView === 'APP_VIEW_MOBILE') {
          return '11px';
        } else {
          return '33px';
        }
      }
    }};

    color: ${props => {
      if (props.color) {
        return props.color;
      } else {
        if (props.appView === 'APP_VIEW_MOBILE') {
          if (props.type === 'secondary') {
            return 'white';
          } else if (props.type === 'defaultCreateCard') {
            return '#4CB69F';
          } else if (props.type === 'primaryCreateCard') {
            return '#fff';
          } else {
            return 'black';
          }
        } else {
          if (props.type === 'defaultCreateCard') {
            return '#343D58';
          } else if (props.type === 'primaryCreateCard') {
            return '#fff';
          }
        }
      }
    }};

    background-color: ${props => {
      if (props.background) {
        return props.background;
      } else {
        if (props.type === 'secondary') {
          return props.theme.themeState.secondary4CB69F;
        } else if (props.type === 'primaryCreateCard') {
          if (
            !props.allFieldsValidated &&
            props.appView === 'APP_VIEW_DESKTOP'
          ) {
            return 'rgba(161, 213, 201, 0.25)';
          } else {
            return '#4CB69F';
          }
        } else if (props.type === 'darkgray') {
          return props.theme.darkGray;
        } else {
          return props.theme.lightGray;
        }
      }
    }};

    :active {
      background-color: ${props => {
        if (props.type === 'primaryCreateCard' && props.allFieldsValidated) {
          return '#235449';
        } else if (props.type === 'defaultCreateCard') {
          return '#6FEDB7';
        }
      }};
      border: ${props => {
        if (props.appView === 'APP_VIEW_MOBILE' && props.allFieldsValidated) {
          if (props.type === 'primaryCreateCard') {
            return '3px solid #235449';
          } else if (props.type === 'defaultCreateCard') {
            return '3px solid #6FEDB7';
          } else {
            return 0;
          }
        }
      }};
    }
  }
`;
