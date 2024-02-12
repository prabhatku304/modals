var rhymSdk = {
  gameOver: (score) => {
    parent.postMessage({ type: "game_over", score }, "*");
    if (window && window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({
          type: "game_over",
          score,
        })
      );
    }
  },
};
