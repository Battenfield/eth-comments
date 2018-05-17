const updatePoints = (data, id, value) => {
  data.forEach((comment) => {
    if (comment.id == id) {
      comment.points = comment.points + value;
      return;
    } else {
      updatePoints(comment.comments, id, value);
    }
  });
}

export default updatePoints;
