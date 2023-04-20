import React, { Component, ReactNode } from 'react';
import { ErrorPage } from '../error-page';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

interface ErrorInfo {
  componentStack: string;
}

function ErrorFallback(): React.ReactElement {
  return <ErrorPage />;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);

    this.state = {
      hasError: false
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({
      hasError: true
    });

    console.log('Error occurred');
    console.log(error);
    console.log(errorInfo);
    // You can also send the error to a logging service, like Sentry or Bugsnag, from here
  }

  render(): any {
    const { children } = this.props;
    const { hasError } = this.state;

    if (hasError) {
      return <ErrorFallback />;
    }

    return children;
  }
}

export default ErrorBoundary;
