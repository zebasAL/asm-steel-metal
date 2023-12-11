import { m, MotionProps } from 'framer-motion';
// hooks
import useResponsive from '~/hooks/useResponsive';
//
import { varContainer } from './variants';

// ----------------------------------------------------------------------

type IProps = MotionProps;

interface Props extends IProps {
  children: React.ReactNode;
  disableAnimatedMobile?: boolean;
}

export default function MotionViewport({
  children,
  disableAnimatedMobile = true,
  ...other
}: Props) {
  const smDown = useResponsive(false, 'down', 'sm');

  if (smDown && disableAnimatedMobile) {
    return <div>{children}</div>;
  }

  return (
    <m.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.3 }}
      variants={varContainer()}
      {...other}
    >
      {children}
    </m.div>
  );
}
