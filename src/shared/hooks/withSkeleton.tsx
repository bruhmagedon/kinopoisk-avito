import { SkeletonType } from "../interfaces";
import { Skeleton } from "../ui/Skeleton";

interface ChildProps {
  isLoading: boolean;
}

const withSkelton = <P extends object>(
  Component: React.ComponentType<P>,
  type?: SkeletonType,
  count?: number
) => {
  const WithSkeleton = (props: ChildProps & P) => {
    const { isLoading, ...otherProps } = props;

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...(otherProps as P)} />;
  };

  return WithSkeleton;
};

export default withSkelton;
