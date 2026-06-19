import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  handleReset = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#F5F7FA' }}>
          <Text style={{ fontSize: 48, marginBottom: 16 }}>⚠️</Text>
          <Text style={{ fontSize: 20, fontWeight: '700', color: '#2C3E50', marginBottom: 8 }}>Something went wrong</Text>
          <Text style={{ fontSize: 14, color: '#95A5A6', textAlign: 'center', marginBottom: 24 }}>
            An unexpected error occurred. Please restart the app.
          </Text>
          <TouchableOpacity
            style={{ backgroundColor: '#4A90D9', paddingVertical: 14, paddingHorizontal: 32, borderRadius: 12 }}
            onPress={this.handleReset}
          >
            <Text style={{ color: '#fff', fontSize: 16, fontWeight: '700' }}>Try Again</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return this.props.children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.node,
};
