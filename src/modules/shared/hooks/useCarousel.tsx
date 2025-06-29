"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseCarouselOptions {
  totalItems: number;
  itemsPerView: {
    mobile: number;
    tablet: number;
    desktop: number;
  };
  autoPlay?: boolean;
  autoPlayInterval?: number;
  loop?: boolean;
  initialIndex?: number;
}

interface UseCarouselResult {
  currentIndex: number;
  canGoNext: boolean;
  canGoPrev: boolean;
  goToNext: () => void;
  goToPrev: () => void;
  goToSlide: (index: number) => void;
  visibleItems: number;
  totalSlides: number;
  isAutoPlaying: boolean;
  pauseAutoPlay: () => void;
  resumeAutoPlay: () => void;
  progress: number;
}

export function useCarousel(options: UseCarouselOptions): UseCarouselResult {
  const {
    totalItems,
    itemsPerView,
    autoPlay = false,
    autoPlayInterval = 3000,
    loop = false,
    initialIndex = 0,
  } = options;

  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [visibleItems, setVisibleItems] = useState(itemsPerView.desktop);
  const [isAutoPlaying, setIsAutoplaying] = useState(autoPlay);
  const [isMounted, setIsMounted] = useState(false);

  const autoPlayRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const updateVisibleItems = () => {
      if (window.innerWidth < 640) {
        setVisibleItems(itemsPerView.mobile);
      } else if (window.innerWidth < 1024) {
        setVisibleItems(itemsPerView.tablet);
      } else {
        setVisibleItems(itemsPerView.desktop);
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);

    return () => window.removeEventListener("resize", updateVisibleItems);
  }, [itemsPerView, isMounted]);

  const totalSlides = Math.max(1, Math.ceil(totalItems / visibleItems));
  const maxIndex = totalSlides - 1;

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, maxIndex]);

  const canGoNext = loop || currentIndex < maxIndex;
  const canGoPrev = loop || currentIndex > 0;

  const progress = totalSlides > 1 ? (currentIndex / maxIndex) * 100 : 100;

  const goToNext = useCallback(() => {
    if (!canGoNext) return;

    setCurrentIndex((prev) => {
      if (loop && prev >= maxIndex) {
        return 0;
      }

      return Math.min(prev + 1, maxIndex);
    });
  }, [canGoNext, loop, maxIndex]);

  const goToPrev = useCallback(() => {
    if (!canGoPrev) return;

    setCurrentIndex((prev) => {
      if (loop && prev <= 0) {
        return maxIndex;
      }

      return Math.max(prev - 1, 0);
    });
  }, [canGoPrev, loop, maxIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      const clampedIndex = Math.max(0, Math.min(index, maxIndex));
      setCurrentIndex(clampedIndex);
    },
    [maxIndex]
  );

  const pauseAutoPlay = useCallback(() => {
    setIsAutoplaying(false);

    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }
  }, []);

  const resumeAutoPlay = useCallback(() => {
    if (autoPlay) {
      setIsAutoplaying(true);
    }
  }, [autoPlay]);

  useEffect(() => {
    if (!isMounted || !isAutoPlaying || totalItems <= visibleItems) {
      return;
    }

    autoPlayRef.current = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [
    isAutoPlaying,
    goToNext,
    autoPlayInterval,
    totalItems,
    visibleItems,
    isMounted,
  ]);

  useEffect(() => {
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  if (!isMounted) {
    return {
      currentIndex: 0,
      canGoNext: true,
      canGoPrev: false,
      goToNext: () => {},
      goToPrev: () => {},
      goToSlide: () => {},
      visibleItems: itemsPerView.desktop,
      totalSlides: Math.max(1, Math.ceil(totalItems / itemsPerView.desktop)),
      isAutoPlaying: false,
      pauseAutoPlay: () => {},
      resumeAutoPlay: () => {},
      progress: 0,
    };
  }

  return {
    currentIndex,
    canGoNext,
    canGoPrev,
    goToNext,
    goToPrev,
    goToSlide,
    visibleItems,
    totalSlides,
    isAutoPlaying,
    pauseAutoPlay,
    resumeAutoPlay,
    progress,
  };
}
