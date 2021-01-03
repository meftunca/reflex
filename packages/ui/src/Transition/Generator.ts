type transformType = { from: string; to: string };
type directType = "left" | "top" | "right" | "bottom";
const EffectGenerator = (
  start: number | string = "-20vh",
  end: number | string = 0,
  type: directType = "left",
  activity: "in" | "out" = "in",
  opacity: number[] = [1, 1],
  transform: transformType = { from: "", to: "" }
) => {
  const isTranslateType = type === "top" || type === "bottom" ? "Y" : "X";
  //   start = activity === "in" ? start : end;
  //   end = activity === "in" ? end : start;
  return {
    from: {
      opacity: activity === "in" ? opacity[0] : opacity[1],
      transform: `translate${isTranslateType}(${start}) ${transform.from}`,
    },
    to: {
      opacity: activity === "in" ? opacity[1] : opacity[0],
      transform: `translate${isTranslateType}(${end}) ${transform.to}`,
    },
  };
};

export default {
  Fade: {
    default: {
      in: EffectGenerator(0, 0, "left", "in", [0, 1]),
      out: EffectGenerator(0, 0, "left", "in", [1, 0]),
    },
    Left: {
      in: EffectGenerator("-20vh", 0, "left", "in", [0, 1]),
      out: EffectGenerator(0, "-50vh", "left", "out", [1, 0]),
    },
    Right: {
      in: EffectGenerator("-20vh", 0, "right", "in", [0, 1]),
      out: EffectGenerator(0, "-50vh", "right", "out", [1, 0]),
    },
    Top: {
      in: EffectGenerator("-20vh", 0, "top", "in", [0, 1]),
      out: EffectGenerator(0, "-50vh", "top", "out", [1, 0]),
    },
    Bottom: {
      in: EffectGenerator("-20vh", 0, "bottom", "in", [0, 1]),
      out: EffectGenerator(0, "-50vh", "bottom", "out", [1, 0]),
    },
  },
  Slide: {
    Left: {
      in: EffectGenerator("-20vh", 0, "left", "in"),
      out: EffectGenerator(0, "-50vh", "left", "out"),
    },
    Right: {
      in: EffectGenerator("-20vh", 0, "right", "in"),
      out: EffectGenerator(0, "-50vh", "right", "out"),
    },
    Top: {
      in: EffectGenerator("-20vh", 0, "top", "in"),
      out: EffectGenerator(0, "-50vh", "top", "out"),
    },
    Bottom: {
      in: EffectGenerator("-20vh", 0, "bottom", "in"),
      out: EffectGenerator(0, "-50vh", "bottom", "out"),
    },
  },
  Zoom: {
    default: {
      in: EffectGenerator(0, 0, "left", "in", undefined, {
        from: "scale(0.2)",
        to: "scale(1)",
      }),
      out: EffectGenerator(0, 0, "left", "out", [0.4, 1], {
        from: "scale(1)",
        to: "scale(0.2)",
      }),
    },
    Left: {
      in: EffectGenerator("-20vh", 0, "left", "in", [0.4, 1], {
        from: "scale(0.2)",
        to: "scale(1)",
      }),
      out: EffectGenerator(0, "-50vh", "left", "out", [0.4, 1], {
        from: "scale(1)",
        to: "scale(0.2)",
      }),
    },
    Right: {
      in: EffectGenerator("-20vh", 0, "right", "in", [0.4, 1], {
        from: "scale(0.2)",
        to: "scale(1)",
      }),
      out: EffectGenerator(0, "-50vh", "right", "out", [0.4, 1], {
        from: "scale(1)",
        to: "scale(0.2)",
      }),
    },
    Top: {
      in: EffectGenerator("-20vh", 0, "top", "in", [0.4, 1], {
        from: "scale(0.2)",
        to: "scale(1)",
      }),
      out: EffectGenerator(0, "-50vh", "top", "out", [0.4, 1], {
        from: "scale(1)",
        to: "scale(0.2)",
      }),
    },
    Bottom: {
      in: EffectGenerator("-20vh", 0, "bottom", "in", [0.4, 1], {
        from: "scale(0.2)",
        to: "scale(1)",
      }),
      out: EffectGenerator(0, "-50vh", "bottom", "out", [0.4, 1], {
        from: "scale(1)",
        to: "scale(0.2)",
      }),
    },
  },
};
