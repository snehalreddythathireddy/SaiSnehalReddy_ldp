import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';

interface IconProps {
  name: 'google' | 'github';
}

const Icon = ({ name }: IconProps) => {
  if (name === 'google') {
    return <FcGoogle size={20} />;
  }
  return <FaGithub size={20} color="#181717" />;
};

export default Icon;