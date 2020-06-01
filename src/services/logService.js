import * as Sentry from "@sentry/browser";

function init() {
  var RELEASE = "0.1.0";
  Sentry.init({
    dsn:
      "https://8d206b8b448d459e88a0d7d33de79073@o397270.ingest.sentry.io/5251600",
    release: RELEASE,
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
