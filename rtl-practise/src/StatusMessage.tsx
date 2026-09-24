interface StatusMessageProps {
  message: string;
}

const StatusMessage = ({ message }: StatusMessageProps) => {
  return (
    <div data-testid="status-message">
      {message}
    </div>
  );
};

export default StatusMessage;