"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/web.dom-collections.iterator.js");

require("core-js/modules/es.promise.js");

require("../assets/styles.scss");

var _react = _interopRequireWildcard(require("react"));

var _robotIcon = _interopRequireDefault(require("../assets/icons/robotIcon.svg"));

var _clientIcon = _interopRequireDefault(require("../assets/icons/clientIcon.svg"));

var _askIcon = _interopRequireDefault(require("../assets/icons/askIcon.svg"));

var _closechat = _interopRequireDefault(require("../assets/icons/closechat.svg"));

var _handemoji = _interopRequireDefault(require("../assets/icons/handemoji.svg"));

var _sendmessage = _interopRequireDefault(require("../assets/icons/sendmessage.svg"));

var _askIconDisabled = _interopRequireDefault(require("../assets/icons/askIconDisabled.svg"));

var _game = _interopRequireDefault(require("../assets/games/game1.svg"));

var _game2 = _interopRequireDefault(require("../assets/games/game3.svg"));

var _game3 = _interopRequireDefault(require("../assets/games/game5.svg"));

var _game4 = _interopRequireDefault(require("../assets/games/game6.svg"));

var _game5 = _interopRequireDefault(require("../assets/games/game7.svg"));

var _game6 = _interopRequireDefault(require("../assets/games/game2.svg"));

var _game7 = _interopRequireDefault(require("../assets/games/game4.svg"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var authUser = localStorage.getItem("user") ? localStorage.getItem("user") : null;

class Chatbot extends _react.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChangeIntent", e => {
      this.setState({
        question: e.target.value
      });
    });

    _defineProperty(this, "scrollToBottom", () => {
      this.mesRef.current.scrollTop = this.mesRef.current.scrollHeight;
    });

    _defineProperty(this, "askBot", e => {
      let question = this.state.question;
      let game = this.state.game;
      this.setState(prevState => ({
        questions: [...prevState.questions, question]
      }));
      this.askAiBot(question, game);
      e.target.value = "";
      this.inputTitle.value = "";
      this.setState({
        question: ""
      });
      this.scrollToBottom();
    });

    _defineProperty(this, "askAiBot", async (question, game) => {
      const data = new FormData();
      data.append("question", question);
      const aiResponse = await (0, _axios.default)({
        url: "https://aisocket.aipigeon.org/detect/".concat(game),
        method: "POST",
        data: data
      });

      if (aiResponse.status === 200) {
        let answer = aiResponse.data;
        this.setState(prevState => ({
          answers: [...prevState.answers, answer]
        }));
      }
    });

    _defineProperty(this, "keyPress", e => {
      if (e.keyCode === 13 && e.target.value !== "") {
        let question = this.state.question;
        this.setState(prevState => ({
          questions: [...prevState.questions, question]
        }));
        let game = this.state.game;
        this.askAiBot(question, game);
        this.setState({
          question: ""
        });
        this.inputTitle.value = "";
        this.scrollToBottom(); // put the login here
      }
    });

    _defineProperty(this, "handleChooseGame", game => {
      this.setState({
        game: game
      });
    });

    this.inputTitle = /*#__PURE__*/_react.default.createRef();
    this.bottomRef = /*#__PURE__*/_react.default.createRef();
    this.mesRef = /*#__PURE__*/_react.default.createRef();
    this.state = {
      question: "",
      questions: [],
      chat: false,
      game: "",
      answers: []
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, authUser && /*#__PURE__*/_react.default.createElement("div", {
      className: "circle-chat-container flex fdr aic jcc"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "lets-talk-chat flex fdr aic jcc"
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: _handemoji.default
    }), "\u6211\u4EEC\u8C08\u4E00\u8C08\u5427"), /*#__PURE__*/_react.default.createElement("div", {
      className: "circle-chatbot flex fdc aic jcc",
      onClick: () => this.setState({
        chat: !this.state.chat
      })
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: _askIcon.default
    }))), this.state.chat && authUser && /*#__PURE__*/_react.default.createElement("div", {
      className: "chat-container flex fdc aic jcc"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "chatbot"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "top-cover flex fdr aic jcfs"
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: _robotIcon.default
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: "flex fdc aifs jcc"
    }, /*#__PURE__*/_react.default.createElement("h5", {
      className: "title"
    }, "\u804A\u5929\u673A\u5668\u4EBA "), /*#__PURE__*/_react.default.createElement("p", null, "\u7EBF\u4E0A")), /*#__PURE__*/_react.default.createElement("div", {
      className: "close flex fdr aic jcc",
      onClick: () => this.setState({
        chat: !this.state.chat
      })
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "close",
      src: _closechat.default
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "faq-container flex fdc aifs jcfs",
      ref: this.mesRef
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "question flex fdr aic jcfs"
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: _robotIcon.default
    }), " ", /*#__PURE__*/_react.default.createElement("p", null, "\u60F3\u770B\u6211\u80FD\u505A\u4EC0\u4E48\u5417?")), /*#__PURE__*/_react.default.createElement("div", {
      className: "games-container flex fdc aic jcc"
    }, /*#__PURE__*/_react.default.createElement("p", null, "S\u9009\u62E9\u4F60\u60F3\u6D4B\u8BD5\u7684\u6E38\u620F"), /*#__PURE__*/_react.default.createElement("div", {
      className: "games flex fdr aic jcc"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "game ".concat(this.state.game === "HHpoker" ? "" : "", " flex fdc aic jcc"),
      onClick: () => this.handleChooseGame("HHpoker")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "game1",
      src: _game.default
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "game ".concat(this.state.game === "德州推广" ? "" : "", " flex fdc aic jcc"),
      onClick: () => this.handleChooseGame("渔人码头")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "game1",
      src: _game6.default
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "games flex fdr aic jcc"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "game ".concat(this.state.game === "德州推广" ? "" : "", " flex fdc aic jcc"),
      onClick: () => this.handleChooseGame("聚合")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "game1",
      src: _game2.default
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "game ".concat(this.state.game === "德州推广" ? "" : "", " flex fdc aic jcc"),
      onClick: () => this.handleChooseGame("德州推广")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "game1",
      src: _game7.default
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "games flex fdr aic jcc"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "game ".concat(this.state.game === "德州推广" ? "" : "", " flex fdc aic jcc"),
      onClick: () => this.handleChooseGame("玩玩扑克")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "game1",
      src: _game3.default
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "game ".concat(this.state.game === "德州推广" ? "" : "", " flex fdc aic jcc"),
      onClick: () => this.handleChooseGame("德州推广1")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "game1",
      src: _game4.default
    }))), /*#__PURE__*/_react.default.createElement("div", {
      className: "games flex fdr aic jcc"
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "game ".concat(this.state.game === "明星娱乐" ? "" : "", " flex fdc aic jcc"),
      onClick: () => this.handleChooseGame("明星娱乐")
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "game7",
      src: _game5.default
    })))), this.state.game !== "" && /*#__PURE__*/_react.default.createElement("div", {
      className: "answer flex fdr aic jcfe"
    }, /*#__PURE__*/_react.default.createElement("p", null, this.state.game), /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: _clientIcon.default
    })), this.state.questions.map((e, i) => {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "answer flex fdc aife jcc"
      }, /*#__PURE__*/_react.default.createElement("p", null, e), this.state.answers.map((e, j) => {
        if (i === j) {
          return /*#__PURE__*/_react.default.createElement("div", {
            className: "question flex fdc aifs jcc"
          }, /*#__PURE__*/_react.default.createElement("p", null, e));
        }
      }));
    })), /*#__PURE__*/_react.default.createElement("div", {
      className: "ask flex fdr aic jcfs"
    }, /*#__PURE__*/_react.default.createElement("input", {
      ref: el => this.inputTitle = el,
      onChange: this.handleChangeIntent,
      placeholder: "\u5728\u6B64\u8F93\u5165\u4F60\u7684\u95EE\u9898",
      onKeyDown: this.keyPress
    }), this.state.question !== "" ? /*#__PURE__*/_react.default.createElement("button", {
      onClick: this.askBot
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: _sendmessage.default
    })) : /*#__PURE__*/_react.default.createElement("button", {
      className: "disabled"
    }, /*#__PURE__*/_react.default.createElement("img", {
      alt: "img",
      src: _askIconDisabled.default
    }))))));
  }

}

exports.default = Chatbot;