// ─── STEAM MOCBAN EDUCATION — Bật Mã Cổ Thư State Machine & Data Engine ─────
// Architecture: UI-First / Schema-First / State-First / Content-Gated.
// Rule: Build the machine — strictly do not invent academic content.

export type BatMaUiState =
  | "idle"        // Khởi tạo / Tổng quan quy trình
  | "entry"       // Bước 1: Khám phá — Quét mã QR hoặc Nhập mã cổ thư
  | "question"    // Bước 2: Giải mã — Câu hỏi thử thách lịch sử
  | "hint"        // Bước 2: Gợi ý phương pháp suy luận
  | "retry"       // Bước 2: Thử lại câu hỏi
  | "unlocked"    // Bước 2: Mở khóa hình tượng thành công
  | "pattern"     // Bước 3: Thiết kế — Khám phá mẫu hoa văn di sản
  | "design"      // Bước 3: Thiết kế — Không gian phác họa đường nét
  | "carve"       // Bước 4: Khắc gỗ — Quy trình mô phỏng đục khắc
  | "print"       // Bước 5: In sản phẩm — Quy trình mô phỏng in dập
  | "complete";   // Hoàn thành toàn bộ hành trình trải nghiệm

export type BatMaContentStatus = "PENDING" | "AVAILABLE" | "VERIFIED";

/**
 * Trạng thái nội dung học thuật chính thức.
 * Luôn giữ ở mức PENDING cho đến khi Hội đồng Khoa học nghiệm thu bàn giao bộ câu hỏi thật.
 */
export const BAT_MA_CONTENT_STATUS: BatMaContentStatus = "PENDING";

export interface BatMaQuestionOption {
  id: string;
  label: string;
}

export interface BatMaQuestion {
  id: string;
  question: string;
  options: BatMaQuestionOption[];
  correctOptionId: string;
  hint?: string;
  explanation?: string;
  sourceCitation?: string;
  sourceReference?: string;
}

export interface BatMaPattern {
  id: string;
  title: string;
  imageAssetKey?: string;
  description?: string;
  sourceReference?: string;
}

export interface BatMaAccessConfig {
  enabled: boolean;
  code?: string;
  note?: string;
}

export interface BatMaStepInfo {
  step: string;        // "01".."05"
  name: string;        // "KHÁM PHÁ", "GIẢI MÃ", "THIẾT KẾ", "KHẮC GỖ", "IN SẢN PHẨM"
  action: string;      // Tên hành động
  detail: string;      // Mô tả chi tiết
  uiState: BatMaUiState;
}

// 5 Bước trải nghiệm chuẩn hóa theo Thẻ quy trình trải nghiệm của khách hàng
// Slogan chính thức: "KHÔNG CHỈ ĐỌC LỊCH SỬ – HÃY TỰ TẠO NÊN LỊCH SỬ!"
export const BAT_MA_STEPS: BatMaStepInfo[] = [
  {
    step: "01",
    name: "KHÁM PHÁ",
    action: "Quét mã QR – Khởi đầu hành trình",
    detail: "Người chơi quét mã QR có sẵn trên thẻ trong bộ kit để truy cập hệ thống giải mã trên web.",
    uiState: "entry",
  },
  {
    step: "02",
    name: "GIẢI MÃ",
    action: "Hiểu hình tượng – Giải đố di sản",
    detail: "Đọc câu đố di sản trên thẻ bài, giải mã thông điệp văn hóa để mở khóa hoa văn Mộc bản.",
    uiState: "question",
  },
  {
    step: "03",
    name: "THIẾT KẾ",
    action: "Phác họa bố cục – Định hình nét vẽ",
    detail: "Phác họa bố cục hoa văn lên phôi con dấu mộc bản, nhận diện đường nét chính và nguyên lý khắc ngược.",
    uiState: "design",
  },
  {
    step: "04",
    name: "KHẮC GỖ",
    action: "Đục khắc mộc bản thủ công",
    detail: "Sử dụng dao đục an toàn khắc theo nét vẽ, chừa phần nét nổi để tạo nên con dấu mộc bản hoàn chỉnh.",
    uiState: "carve",
  },
  {
    step: "05",
    name: "IN SẢN PHẨM",
    action: "Lăn mực – In dấu di sản",
    detail: "Lăn mực đều lên bề mặt con dấu mộc bản, in dập lên giấy mỹ thuật, thiệp hoặc túi vải canvas.",
    uiState: "print",
  },
];

// ─── Dữ liệu mặc định (Gated & Grounded in Client Materials) ─────────
export const defaultAccessConfig: BatMaAccessConfig = {
  enabled: true,
  code: undefined, // Thẻ vật lý không in mã chữ/số; chờ khách hàng xác nhận chính sách QR Direct-Entry
  note: "Mã QR vật lý giải mã thành https://stem-mocban-final.vercel.app/trai-nghiem. Chính sách mã truy cập đang chờ khách hàng phê duyệt.",
};

// Question Bank: 30 câu đố đã tìm thấy nguyên văn trên Thẻ câu hỏi (7x10cm),
// nhưng options A/B/C/D và answer keys chưa được in trên ấn phẩm.
// Giữ mảng rỗng để không bịa đặt phương án nhiễu theo RULE 04 (Blocker 01 & 02).
export const defaultQuestionBank: BatMaQuestion[] = [];

// Danh mục 30 hoa văn mẫu con dấu Mộc bản (5x5cm) chính thức trích xuất từ bộ Kit Bật Mã Cổ Thư
export const defaultPatterns: BatMaPattern[] = [
  { id: "PAT-01", title: "Cuốn sách mở", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-02", title: "Cuốn sách đóng", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-03", title: "Bút chì", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-04", title: "Bút lông", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-05", title: "Nghiên mực", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-06", title: "Gác bút hình núi", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-07", title: "Cuộn thư", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-08", title: "Đèn lồng", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-09", title: "Chén trà", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-10", title: "Ấm trà", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-11", title: "Hũ sành", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-12", title: "Bát ăn cơm", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-13", title: "Ghế đẩu", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-14", title: "Bàn học", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-15", title: "Quạt nan", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-16", title: "Giỏ tre", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-17", title: "Cây chổi", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-18", title: "Xô nước", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-19", title: "Nhành hoa mai", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-20", title: "Hoa sen", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-21", title: "Hoa cúc", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-22", title: "Cỏ bốn lá", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-23", title: "Cành lá trúc", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-24", title: "Chiếc lá", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-25", title: "Con chim", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-26", title: "Con cá chép", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-27", title: "Con bướm", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-28", title: "Con rùa", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-29", title: "Con ếch", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
  { id: "PAT-30", title: "Con mèo", description: "Mẫu con dấu mộc bản 5x5cm (Nguồn: Mẫu tấm in.pdf / Họa tiết bộ kit.pdf)" },
];

// ─── User State Model ────────────────────────────────────────────────
export interface BatMaState {
  uiState: BatMaUiState;
  currentStepIndex: number; // 0..4
  highestStepReached: number; // 0..4: Giới hạn bước cao nhất đã được mở khóa hợp lệ
  enteredCode: string;
  codeError: string | null;
  selectedOptionId: string | null;
  answerSubmitted: boolean;
  isCorrect: boolean | null;
  attemptCount: number;
  hintRequested: boolean;
  selectedPatternId: string | null;
  carveProgress: number; // 0..100
  printCompleted: boolean;
  statusMessage: string;
}

export const initialBatMaState: BatMaState = {
  uiState: "idle",
  currentStepIndex: 0,
  highestStepReached: 0,
  enteredCode: "",
  codeError: null,
  selectedOptionId: null,
  answerSubmitted: false,
  isCorrect: null,
  attemptCount: 0,
  hintRequested: false,
  selectedPatternId: null,
  carveProgress: 0,
  printCompleted: false,
  statusMessage: "Chào mừng bạn đến với mô phỏng trải nghiệm Bật Mã Cổ Thư.",
};

// ─── Actions (Discriminated Union) ────────────────────────────────────
export type BatMaAction =
  | { type: "START" }
  | { type: "SET_CODE"; code: string }
  | { type: "SUBMIT_CODE"; accessConfig?: BatMaAccessConfig }
  | { type: "BYPASS_CODE_EXPLORE" }
  | { type: "SELECT_OPTION"; optionId: string }
  | { type: "SUBMIT_ANSWER"; correctOptionId?: string }
  | { type: "REQUEST_HINT" }
  | { type: "RETRY_QUESTION" }
  | { type: "PROCEED_TO_PATTERN" }
  | { type: "SELECT_PATTERN"; patternId: string }
  | { type: "PROCEED_TO_DESIGN" }
  | { type: "PROCEED_TO_CARVE" }
  | { type: "SET_CARVE_PROGRESS"; progress: number }
  | { type: "PROCEED_TO_PRINT" }
  | { type: "EXECUTE_PRINT" }
  | { type: "COMPLETE_EXPERIENCE" }
  | { type: "RESET" }
  | { type: "NAVIGATE_TO_STEP"; stepIndex: number };

// ─── Pure State Reducer ──────────────────────────────────────────────
export function batMaReducer(state: BatMaState, action: BatMaAction): BatMaState {
  switch (action.type) {
    case "START":
      return {
        ...state,
        uiState: "entry",
        currentStepIndex: 0,
        highestStepReached: Math.max(state.highestStepReached, 0),
        statusMessage: "Bước 1: Quét mã QR hoặc nhập mã cổ thư để bắt đầu giải mã.",
      };

    case "SET_CODE":
      return {
        ...state,
        enteredCode: action.code,
        codeError: null,
      };

    case "SUBMIT_CODE": {
      const config = action.accessConfig || defaultAccessConfig;
      if (!config.code) {
        // Chưa có mã cấu hình từ client -> thông báo minh bạch
        return {
          ...state,
          codeError: "Mã truy cập đang được cập nhật chính thức từ nhóm đề tài.",
          statusMessage: "Mã truy cập chính thức đang chờ nạp dữ liệu.",
        };
      }

      if (state.enteredCode.trim().toUpperCase() === config.code.toUpperCase()) {
        return {
          ...state,
          uiState: "question",
          currentStepIndex: 1,
          highestStepReached: Math.max(state.highestStepReached, 1),
          codeError: null,
          statusMessage: "Mã cổ thư chính xác! Chuyển sang Bước 2: Giải mã câu hỏi di sản.",
        };
      }

      return {
        ...state,
        codeError: "Mã truy cập chưa chính xác. Vui lòng kiểm tra lại ký tự in trên thẻ bài kit.",
        statusMessage: "Mã truy cập không hợp lệ. Vui lòng thử lại.",
      };
    }

    case "BYPASS_CODE_EXPLORE":
      return {
        ...state,
        uiState: "question",
        currentStepIndex: 1,
        highestStepReached: Math.max(state.highestStepReached, 1),
        codeError: null,
        statusMessage: "Chuyển sang Bước 2: Thử thách giải mã di sản (Chế độ xem trước thử nghiệm).",
      };

    case "SELECT_OPTION":
      return {
        ...state,
        selectedOptionId: action.optionId,
      };

    case "SUBMIT_ANSWER": {
      if (!state.selectedOptionId) {
        return state;
      }

      // Nếu có đáp án xác thực truyền vào:
      if (action.correctOptionId) {
        const isRight = state.selectedOptionId === action.correctOptionId;
        if (isRight) {
          return {
            ...state,
            answerSubmitted: true,
            isCorrect: true,
            uiState: "unlocked",
            statusMessage: "Chúc mừng bạn đã giải mã thành công! Hình tượng hoa văn đã được mở khóa.",
          };
        } else {
          return {
            ...state,
            answerSubmitted: true,
            isCorrect: false,
            attemptCount: state.attemptCount + 1,
            uiState: "retry",
            statusMessage: "Đáp án chưa chính xác. Bạn có thể xem gợi ý hoặc thử lại.",
          };
        }
      }

      // Nếu chưa có question bank (pending content):
      return {
        ...state,
        answerSubmitted: true,
        isCorrect: true,
        uiState: "unlocked",
        statusMessage: "Mở khóa thành công khung thử thách.",
      };
    }

    case "REQUEST_HINT":
      return {
        ...state,
        uiState: "hint",
        hintRequested: true,
        statusMessage: "Hiển thị hướng dẫn tư duy và gợi ý suy luận.",
      };

    case "RETRY_QUESTION":
      return {
        ...state,
        uiState: "question",
        selectedOptionId: null,
        answerSubmitted: false,
        isCorrect: null,
        statusMessage: "Vui lòng chọn lại đáp án cho câu hỏi thử thách.",
      };

    case "PROCEED_TO_PATTERN":
      // GUARD: Chỉ được sang Bước 3 nếu câu hỏi đã được giải mã / mở khóa
      if (!state.isCorrect && state.uiState !== "unlocked" && state.highestStepReached < 2) {
        return {
          ...state,
          statusMessage: "Bạn cần giải mã thử thách để mở khóa hoa văn trước khi tiếp tục.",
        };
      }
      return {
        ...state,
        uiState: "pattern",
        currentStepIndex: 2,
        highestStepReached: Math.max(state.highestStepReached, 2),
        statusMessage: "Bước 3: Khám phá và lựa chọn hoa văn Mộc bản để phác họa nét vẽ.",
      };

    case "SELECT_PATTERN":
      return {
        ...state,
        selectedPatternId: action.patternId,
      };

    case "PROCEED_TO_DESIGN":
      return {
        ...state,
        uiState: "design",
        currentStepIndex: 2,
        highestStepReached: Math.max(state.highestStepReached, 2),
        statusMessage: "Bước 3: Không gian định hình nét vẽ và bố cục mẫu trên giấy/ván gỗ.",
      };

    case "PROCEED_TO_CARVE":
      // GUARD: Phải hoàn thành Bước 2 (Giải mã) và tiếp cận Bước 3 (Thiết kế)
      if (state.highestStepReached < 2) {
        return {
          ...state,
          statusMessage: "Vui lòng hoàn thành các bước khám phá và thiết kế trước khi khắc gỗ.",
        };
      }
      return {
        ...state,
        uiState: "carve",
        currentStepIndex: 3,
        highestStepReached: Math.max(state.highestStepReached, 3),
        statusMessage: "Bước 4: Quy trình mô phỏng thao tác đục khắc mộc bản truyền thống.",
      };

    case "SET_CARVE_PROGRESS":
      return {
        ...state,
        carveProgress: Math.min(Math.max(action.progress, 0), 100),
      };

    case "PROCEED_TO_PRINT":
      // GUARD: Chỉ được sang Bước 5 khi tiến độ khắc đã đạt 100%
      if (state.carveProgress < 100) {
        return {
          ...state,
          statusMessage: "Bạn cần hoàn thành tiến độ đục khắc ván gỗ (100%) trước khi in sản phẩm.",
        };
      }
      return {
        ...state,
        uiState: "print",
        currentStepIndex: 4,
        highestStepReached: Math.max(state.highestStepReached, 4),
        statusMessage: "Bước 5: Lăn mực và dập in sản phẩm lên túi vải canvas/giấy dó.",
      };

    case "EXECUTE_PRINT":
      return {
        ...state,
        printCompleted: true,
        statusMessage: "In thành công! Tác phẩm thủ công mang dấu ấn di sản đã hoàn thiện.",
      };

    case "COMPLETE_EXPERIENCE":
      // GUARD: Chỉ hoàn thành khi thao tác in dập đã được xác nhận
      if (!state.printCompleted) {
        return {
          ...state,
          statusMessage: "Vui lòng thực hiện in dập sản phẩm trước khi tổng kết hành trình.",
        };
      }
      return {
        ...state,
        uiState: "complete",
        statusMessage: "Bạn đã hoàn thành trọn vẹn chuỗi 5 bước trải nghiệm Bật Mã Cổ Thư!",
      };

    case "RESET":
      return {
        ...initialBatMaState,
        highestStepReached: 0,
        statusMessage: "Đã làm mới hành trình. Bạn có thể bắt đầu lại từ Bước 1.",
      };

    case "NAVIGATE_TO_STEP": {
      const idx = action.stepIndex;
      if (idx < 0 || idx > 4) return state;
      // GUARD: Ngăn chặn tuyệt đối hành vi nhảy cóc về phía trước tới các bước chưa được mở khóa
      if (idx > state.highestStepReached) {
        return {
          ...state,
          statusMessage: `Bước ${idx + 1} (${BAT_MA_STEPS[idx]?.name}) chưa được mở khóa. Vui lòng hoàn thành tuần tự các bước trước.`,
        };
      }
      const targetState = BAT_MA_STEPS[idx]?.uiState ?? "entry";
      return {
        ...state,
        currentStepIndex: idx,
        uiState: targetState,
        statusMessage: `Chuyển tới Bước ${idx + 1}: ${BAT_MA_STEPS[idx]?.name}`,
      };
    }

    default:
      return state;
  }
}
