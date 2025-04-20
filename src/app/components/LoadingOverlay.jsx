export default function LoadingOverlay() {
    return (
      <div className="fixed inset-0 z-100 flex items-center justify-center   transition-opacity" style={{ backgroundColor: "#161616" }}>
        <div className="space-y-4 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
        </div>
      </div>
    );
  }