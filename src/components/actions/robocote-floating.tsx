// src/components/actions/RobocoteFloating.tsx
"use client";

import RobocoteButton from "./robocote-button";

export default function RobocoteFloating() {
    return (
        <div className="fixed left-4 top-1/2 -translate-y-1/2 z-50">
            <div className="bg-white shadow-lg border rounded-full p-3">
                <RobocoteButton />
            </div>
        </div>
    );
}
