import React, { useEffect } from 'react';

enum SCROLL_DIRECTION {
  UP = 'up',
  DOWN = 'down',
}

const scrollDirection = (e: WheelEvent) => {
  if (e.deltaY > 0) {
    return SCROLL_DIRECTION.DOWN;
  } else {
    return SCROLL_DIRECTION.UP;
  }
};

const getNextDiv = (parentDiv: HTMLElement, currentPosition: number) => {
  for (let i = 0; i < parentDiv.children.length; i++) {
    if ((parentDiv.children[i] as HTMLElement).offsetTop > currentPosition) {
      return parentDiv.children[i] as HTMLElement;
    }
  }
};

const getPrevDiv = (parentDiv: HTMLElement, currentPosition: number) => {
  for (let i = parentDiv.children.length - 1; i >= 0; i--) {
    if ((parentDiv.children[i] as HTMLElement).offsetTop < currentPosition) {
      return parentDiv.children[i] as HTMLElement;
    }
  }
};

const handleScroll = (
  e: WheelEvent,
  listRef: React.RefObject<HTMLDivElement>
) => {
  if (scrollDirection(e) === SCROLL_DIRECTION.DOWN) {
    const nextElem = getNextDiv(
      listRef.current as HTMLDivElement,
      window.pageYOffset
    );
    if (nextElem) {
      window.scrollTo({
        top: nextElem.offsetTop,
        behavior: 'smooth',
      });
    }
  } else {
    const prevElem = getPrevDiv(
      listRef.current as HTMLDivElement,
      window.pageYOffset
    );
    if (prevElem) {
      window.scrollTo({
        top: prevElem.offsetTop,
        behavior: 'smooth',
      });
    }
  }
};

const useScrollList = (listRef: React.RefObject<HTMLDivElement>) => {
  useEffect(() => {
    if (listRef.current) {
      window.addEventListener('wheel', (e) => handleScroll(e, listRef));
      return () => {
        window.removeEventListener('scroll', () => {
          return;
        });
      };
    }
  }, [listRef.current]);
};

export default useScrollList;
